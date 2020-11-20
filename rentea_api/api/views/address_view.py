from flask import Blueprint, jsonify, request
from ..models.address_model import AddressModel
import json

main = Blueprint('main', __name__)


@main.route('/address', methods=['POST'])
def add_address():
    data = request.get_json()
    address = AddressModel(
        data["address"]
    )
    address.add_address()
    return "OK", 200


@main.route('/landlord_from_address', methods=['POST'])
def get_landlord_from_address():
    try:
        data = json.loads(request.data)
        address = AddressModel(
            data["address"]
        )
        landlord_data = address.get_landlord_by_address()
        return jsonify({'landlord_data': landlord_data})
    except Exception as error:
        return jsonify({'error': str(error)})
