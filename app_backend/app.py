from flask import Flask, session, request

app = Flask(__name__)


@app.route('/api/home')
def get_disease():
    return session['disease']


@app.route('/api/disease', methods=['POST'])
def submit_disease():
    if request.method == 'POST':
        session['disease'] = request.json['disease']
        return session['disease']


if __name__ == '__main__':
    app.secret_key = 'super secret key'
    app.config['SESSION_TYPE'] = 'memcached'
    app.run(debug=True)
