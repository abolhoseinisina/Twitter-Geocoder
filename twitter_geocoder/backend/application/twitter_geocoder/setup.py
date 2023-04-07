from setuptools import find_packages, setup

setup(
    name='twitter_geocoder',
    packages=find_packages(include=['twitter_geocoder']),
    version='0.1.0',
    description='A python library to extract geographical information from textual content of Twitter accounts.',
    author='Ebola!',
    license='MIT',
    install_requires=[],
    setup_requires=['pytest-runner'],
    tests_require=['pytest'],
    test_suite='tests',
    package_data={
        'twitter_geocoder': ['twitter_geocoder/Alberta/data/geo-names.csv', 'twitter_geocoder/Alberta/data/road-names.csv']
    }
)