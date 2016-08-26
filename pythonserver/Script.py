'''
Created on Aug 25, 2016

@author: liuxiangdong
'''
print('Script ran correctly')
def cheer_up(times):
    for i in range(1,times+1):
        print('You will become a good programmer'+i*'!')
sadness = int(input('Enter 1-10 indicating how sad you are:'))
cheer_up(sadness)

from gevent import monkey
monkey.patch_all()

import cgi
import redis
from flask import Flask, render_template, request
from flask_socketio import SocketIO

app = Flask(__name__)
db = redis.StrictRedis('localhost', 6379, 0)
socketio = SocketIO(app)


@app.route('/')
def main():
    '''return render_template('main.html')'''
    print('hello python websocket!')
    return ''


@app.route('/pymeetups/')
def pymeetups():
    return render_template('pymeetups.html')


@socketio.on('connect', namespace='/dd')
def ws_conn():
    c = db.incr('connected')
    socketio.emit('msg', {'count': c}, namespace='/dd')


@socketio.on('disconnect', namespace='/dd')
def ws_disconn():
    c = db.decr('connected')
    socketio.emit('msg', {'count': c}, namespace='/dd')

@socketio.on('city', namespace='/dd')
def ws_city(message):
    print(message['city'])
    socketio.emit('city', {'city': cgi.escape(message['city'])},
                  namespace="/dd")

if __name__ == '__main__':
    socketio.run(app, "0.0.0.0", port=8585)