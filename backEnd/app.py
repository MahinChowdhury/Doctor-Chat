from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from flask_mysqldb import MySQL

app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_PORT'] = 3306  # MySQL default port is 3306
app.config['MYSQL_USER'] = 'root'  # Replace with your MySQL username
# Replace with your MySQL database name
app.config['MYSQL_DB'] = 'doctorhealth'
app.config['MYSQL_PASSWORD'] = ''

mysql = MySQL(app)


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    cursor = mysql.connection.cursor()
    cursor.execute('SELECT * FROM users WHERE email = %s', (email,))
    user = cursor.fetchone()
    cursor.close()

    if user and check_password_hash(user[3], password):
        return jsonify({'message': 'Login Successfull'})
    else:
        return jsonify({'message': 'Login Failed'}, 401)


@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    cursor = mysql.connection.cursor()
    cursor.execute('SELECT * FROM users WHERE email = %s', (email))
    existing_user = cursor.fetchone()

    if existing_user:
        return jsonify({'message': 'Email already registered'}, 400)

    hashed_password = generate_password_hash(password, method='sha256')
    cursor.execute('INSERT INTO users (username,email,password) VALUES (%s, %s, %s)',
                   (username, email, hashed_password))
    mysql.connection.commit()
    cursor.close()

    return jsonify({'message': 'Registration successful'})


if __name__ == '__main__':
    app.run(debug=True)
