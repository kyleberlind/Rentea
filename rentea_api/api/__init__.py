from flask import Flask
from flask_cors import CORS
import firebase_admin


def create_app():
    if not firebase_admin._apps:
        cred = firebase_admin.credentials.Certificate('firestore_api_key.json')
        firebase_admin.initialize_app(cred)

    app = Flask(__name__)
    CORS(app)
    from .views.address_view import main
    app.register_blueprint(main)

    return app


if __name__ == "__main__":
    create_app()
