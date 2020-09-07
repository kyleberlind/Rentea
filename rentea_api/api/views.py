from flask import Blueprint, jsonify

main =  Blueprint('main', __name__)

@main.route('/add_review', methods=['POST'])
def add_review():
    return 'Done', 201

@main.route('/get_review')
def get_review():
    review = []
    return jsonify({'review' : review})
