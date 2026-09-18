import mongoengine as me

class Product(me.Document):
    title = me.StringField(required=True,max_length=200)
    price = me.FloatField(required=True)
    description = me.StringField()
    image = me.URLField()
    category = me.StringField()

    meta = {'collection': 'products'}

    def __str__(self):
        return self.title