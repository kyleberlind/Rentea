from flask import Blueprint, jsonify, request
from ..models.address_model import AddressModel
from ..models.landlord_model import LandlordModel
import json

main = Blueprint('main', __name__)


@main.route('/add_landlord_review_by_address', methods=['POST'])
def add_landlord_review_by_address():
    data = json.loads(request.data)
    landlord = LandlordModel()
    landlord.add_landlord_review_by_address(data)
    return "OK", 200


@main.route('/get_landlord_by_address', methods=['GET'])
def get_landlord_from_address():
    try:
        address_data = request.args
        address = AddressModel()
        landlord_data = address.get_landlord_by_address(address_data["address"])
        return jsonify({'landlordData': landlord_data})
    except Exception as error:
        return jsonify({'error': str(error)})
