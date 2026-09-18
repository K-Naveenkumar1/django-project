from .serializers import ProductSerializer
from .models import Product
from rest_framework import viewsets


class ProductViewSet (viewsets.ModelViewSet):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.all()