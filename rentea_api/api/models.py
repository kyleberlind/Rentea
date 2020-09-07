from . import db

class Review(db.Review):
    id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.String(50))
    landloard = db.Column(db.String(50))
