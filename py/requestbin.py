#!/usr/bin/env python3.7
import http.client
import os

#  conn = http.client.HTTPSConnection('en3ffype9rwz3.x.pipedream.net')
conn = http.client.HTTPSConnection(os.popen('cat /hdd/dev/token/requestbin.token').read().strip('\n')+'.x.pipedream.net')

currentipwlan = 'current WLAN IP : '+os.popen('curl -s ifconfig.me').read()

uptime = os.popen('uptime').read().strip()

timerlist = list(filter(None, os.popen('systemctl list-timers  | grep updatefreedns.timer').read().replace(' updatefreedns.timer          updatefreedns.service', '').split(' ')))
try:
    timerlist = ' '.join(timerlist[:timerlist.index('left')+1])+'\n'+' '.join(timerlist[timerlist.index('left')+1:])
except Exception as e:
    timerlist = str(e)+'\n'+' '.join(timerlist)
    print(e)

print(currentipwlan, '\n', uptime, '\n', timerlist.strip())

conn.request("POST", "/", currentipwlan+'\n'+uptime+'\n\n'+'domain name update :'+'\n'+timerlist.strip())
