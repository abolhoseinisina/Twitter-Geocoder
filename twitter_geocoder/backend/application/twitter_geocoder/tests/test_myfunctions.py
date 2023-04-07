from twitter_geocoder import myfunctions

def test_dummy_function():
    assert myfunctions.dummy_function() == 'Twitter'

def test_get_geonames():
    df = myfunctions.get_geonames()
    assert len(df.index) == 9337

def test_get_roadnames():
    df = myfunctions.get_roadnames()
    assert len(df.index) == 10286