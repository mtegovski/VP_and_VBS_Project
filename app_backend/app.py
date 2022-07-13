from flask import Flask, session, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/api/home')
@cross_origin()
def get_disease():
    session['disease'] = 'Cow'
    return jsonify(session['disease'])


@app.route('/api/disease', methods=['POST'])
@cross_origin()
def submit_disease():
    if request.method == 'POST':
        session['disease'] = request.json['disease']
        return session['disease']


if __name__ == '__main__':
    app.secret_key = 'super secret key'
    app.config['SESSION_TYPE'] = 'memcached'
    app.run(debug=True)
