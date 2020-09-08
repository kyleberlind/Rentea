from flask import Flask
from firebase import firebase

def create_app():
    app = Flask(__name__)

    from controllers.review_controller import main
    app.register_blueprint(main)

    return app
