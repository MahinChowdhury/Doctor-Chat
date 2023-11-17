from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer
import joblib
import pandas as pd
import spacy.cli
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
from werkzeug.security import generate_password_hash, check_password_hash
from flask_mysqldb import MySQL

app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = 'localhost'
# app.config['MYSQL_PORT'] = 3306  # MySQL default port is 3306
app.config['MYSQL_USER'] = 'root'  # Replace with your MySQL username
# Replace with your MySQL database name
app.config['MYSQL_DB'] = 'doctorhealth'
app.config['MYSQL_PASSWORD'] = ''

mysql = MySQL(app)

# NLP model

# importing spacy library
# spacy.cli.download("en_core_web_lg")
nlp = spacy.load("en_core_web_lg")

# nlp = spacy.load("en_core_web_sm")


def clean_txt(text):
    text = text.replace('\n', ' ').replace('\r', '')
    return text

# preprocess input text


def preprocess_input(user_input):
    user_token = nlp(user_input)

    filtered_token = []

    for token in user_token:
        if token.is_stop or token.is_punct:
            continue
        filtered_token.append(token.lemma_)

    return " ".join(filtered_token)


# importing csv,model file
input_csv_url = "models/diseaseData.csv"
df = pd.read_csv(input_csv_url)
df['processed_txt'] = df['Symptoms'].apply(preprocess_input)

# Fit the TF-IDF vectorizer
tfidf_vectorizer = TfidfVectorizer()
tfidf_matrix = tfidf_vectorizer.fit_transform(df['processed_txt'].fillna(''))
joblib.dump(tfidf_matrix, 'models/tfidf_vectors.pkl')


def generate_response(user_input, df):

    user_input = preprocess_input(user_input)
    user_input_vector = tfidf_vectorizer.transform([user_input])

    similarities = cosine_similarity(user_input_vector, tfidf_matrix)
    max_similarity_index = similarities.argmax()

    response = max_similarity_index

    return response

# User Authentication


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    print(email + " " + password)

    cursor = mysql.connection.cursor()
    cursor.execute('SELECT * FROM users WHERE email = %s', (email,))
    user = cursor.fetchone()
    cursor.close()

    print(check_password_hash(user[3], password))

    if user and check_password_hash(user[3], password):
        return jsonify({'message': 'Login Successfull'}, {'username': user[1]})
    else:
        return jsonify({'message': 'Login Failed'}, 400)


@app.route('/register', methods=['POST'])
def register():

    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    print(username + " " + email + " " + password)

    cursor = mysql.connection.cursor()
    cursor.execute('SELECT * FROM users WHERE email = %s', (email,))
    existing_user = cursor.fetchone()

    if existing_user:
        return jsonify({'message': 'Email already registered'}, 400)

    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
    cursor.execute('INSERT INTO users (username,email,password) VALUES (%s, %s, %s)',
                   (username, email, hashed_password))
    mysql.connection.commit()
    cursor.close()

    response = jsonify({'message': 'Registration successful'})
    return response

# Submit User Message


@app.route('/send_msg', methods=['POST'])
def send_msg():
    data = request.get_json()
    user_msg = data.get('typedText')
    print(user_msg)

    match_idx = generate_response(user_msg, df)
    disease = "Predicted Disease : " + df.iloc[match_idx]['Disease']
    causes = "Causes of this disease: \n\n" + \
        df.iloc[match_idx]['Causes'] if df.iloc[match_idx]['Causes'] != " " else ""

    treatment = "Suggested treatments : \n\n" + \
        df.iloc[match_idx]['Treatment']
    treatment = "Suggested treatments : \n\n" + \
        df.iloc[match_idx]['Treatment'] if df.iloc[match_idx]['Treatment'] != " " else ""

    print(disease)
    print(causes)
    print(treatment)

    return jsonify({'user_msg': 'message sent', 'disease': disease, 'causes': causes, 'treatment': treatment})


if __name__ == '__main__':
    app.run(debug=True)
