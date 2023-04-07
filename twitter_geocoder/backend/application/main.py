import sqlite3
from sqlite3 import Error

def create_tweet(conn, tweet):
    sql = ''' INSERT INTO tweets_tweet (tweetID, tweet, publishDateTime, lastUpdateDateTime, mainHighway, geoname, score, account, province)
              VALUES(?,?,?,?,?,?,?,?,?) '''

    cur = conn.cursor()
    cur.execute(sql, tweet)
    conn.commit()

    return cur.lastrowid

def create_connection():
    db_file = r"../api/db.sqlite3"
    conn = None
    try:
        conn = sqlite3.connect(db_file)
    except Error as e:
        print('Error connecting')

    return conn

def insertTweet(tweet):
    conn = create_connection()
    with conn:
        tweetPk = create_tweet(conn, tweet)

    return tweetPk

def main():
    tweet = (1443584298687229952, "SB QEII south of Twp Rd 455, SW of Wetaskiwin, MVC. Emergency crews on scene. Expect a lane closure, and delays. (8:31am) #ABRoads", 
                   '9/30/2021  2:31:31 PM', '9/30/2021  4:54:08 PM', 'highway 2', 'Wetaskiwin', 1, '@511Alberta', 'AB')
    print('inserted tweet pk: ', insertTweet(tweet))

if __name__ == "__main__":
    main()