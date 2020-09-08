from flask import Blueprint, jsonify
from ..models.review_model import Review_Model

main =  Blueprint('main', __name__)

@main.route('/add_review', methods=['POST'])
def add_review():
    review_data = request.json();
    try:
        review_model= Review_Model()
    except:
        return 'Error'

@main.route('/get_review')
def get_review():
    try:
        review = []
        return jsonify({'review' : review})
    except:
        return 'Error'
