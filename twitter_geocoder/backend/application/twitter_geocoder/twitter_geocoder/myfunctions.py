import pkg_resources
import pandas as pd

def dummy_function() -> str:
    """
    A simple function that returns a dummy string.
    """
    return 'Twitter'

def get_geonames():
    return pd.read_csv(pkg_resources.resource_stream(__name__, 'Alberta/data/geo-names.csv'))

def get_roadnames():
    return pd.read_csv(pkg_resources.resource_stream(__name__, 'Alberta/data/road-names.csv'))