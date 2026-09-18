from .models import Product
from rest_framework_mongoengine.serializers import DocumentSerializer


class ProductSerializer(DocumentSerializer):
    class Meta:
        model = Product
        fields = '__all__'