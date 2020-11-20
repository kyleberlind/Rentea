from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)

    from views.address_view import main
    app.register_blueprint(main)
    cors = CORS(app)
    return app

if __name__ == "__main__":
    create_app()
