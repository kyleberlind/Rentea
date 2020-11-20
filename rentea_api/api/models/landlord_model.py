from ..models.review_model import ReviewModel


class LandlordModel:
    def __init__(self, landlord_data):
        self.first_name = landlord_data["first_name"]
        self.last_name = landlord_data["last_name"]
        self.age = landlord_data["age"]
        self.rating = landlord_data["rating"]
        self.review = landlord_data["review"]

    def serialize(self):
        return{
            "first_name": self.first_name,
            "last_name": self.last_name,
            "age": self.age,
            "rating": self.rating,
            "review": self.review
        }

