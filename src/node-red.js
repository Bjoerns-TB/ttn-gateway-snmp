[
    {
        "id": "acdece85.4f6ed",
        "type": "snmp",
        "z": "c520903.54f9f7",
        "host": "1.2.3.4",
        "community": "public",
        "version": "1",
        "oids": "1.3.6.1.2.1.25.1.1.0",
        "name": "Uptime",
        "x": 280,
        "y": 200,
        "wires": [
            [
                "1873fe17.a1dd52"
            ]
        ]
    },
    {
        "id": "eb920791.e124e8",
        "type": "inject",
        "z": "c520903.54f9f7",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "60",
        "crontab": "",
        "once": false,
        "x": 107,
        "y": 176,
        "wires": [
            [
                "acdece85.4f6ed",
                "e942da9a.8f7748",
                "86a1e96.7841f18",
                "4e784deb.e8faf4",
                "91abfa4d.8b5758",
                "86d5185e.012cb8",
                "4bc0356b.7675ac",
                "508d1ba8.f7fd44",
                "7353acd6.7e5b14",
                "13a01d2f.1ab663",
                "134668ed.74eef7",
                "8ed7c34.dc9384",
                "42d18d30.edffc4"
            ]
        ]
    },
    {
        "id": "86a1e96.7841f18",
        "type": "snmp",
        "z": "c520903.54f9f7",
        "host": "1.2.3.4",
        "community": "public",
        "version": "1",
        "oids": "1.3.6.1.4.1.2021.10.1.3.1",
        "name": "Load 1m",
        "x": 281.5,
        "y": 250,
        "wires": [
            [
                "9e81a37a.e6892"
            ]
        ]
    },
    {
        "id": "e942da9a.8f7748",
        "type": "snmp",
        "z": "c520903.54f9f7",
        "host": "1.2.3.4",
        "community": "public",
        "version": "2c",
        "oids": "1.3.6.1.2.1.25.1.8",
        "name": "Temp",
        "x": 274.5,
        "y": 367,
        "wires": [
            [
                "fa8433f6.eea23"
            ]
        ]
    },
    {
        "id": "fa8433f6.eea23",
        "type": "function",
        "z": "c520903.54f9f7",
        "name": "OK",
        "func": "var msg1 = { payload: msg.payload.length };\nmsg1.payload = msg.payload[0].value;\nmsg1.payload = msg1.payload/1000;\nmsg1.payload = msg1.payload.toFixed(1);\nmsg1.topic=\"temp\";\nreturn msg1;",
        "outputs": 1,
        "noerr": 0,
        "x": 428,
        "y": 367,
        "wires": [
            [
                "ce785b18.bce298"
            ]
        ]
    },
    {
        "id": "1873fe17.a1dd52",
        "type": "function",
        "z": "c520903.54f9f7",
        "name": "OK",
        "func": "var msg1 = { payload: msg.payload.length };\nmsg1.payload = msg.payload[0].value;\nmsg1.payload = msg1.payload/8640000;\nmsg1.payload = msg1.payload.toFixed(2);\nmsg1.topic=\"uptime\";\nreturn msg1;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 427,
        "y": 202,
        "wires": [
            [
                "ce785b18.bce298"
            ]
        ]
    },
    {
        "id": "4e784deb.e8faf4",
        "type": "snmp",
        "z": "c520903.54f9f7",
        "host": "1.2.3.4",
        "community": "public",
        "version": "1",
        "oids": "1.3.6.1.4.1.2021.10.1.3.2",
        "name": "Load 5m",
        "x": 281.5,
        "y": 289,
        "wires": [
            [
                "41880790.68dbb8"
            ]
        ]
    },
    {
        "id": "91abfa4d.8b5758",
        "type": "snmp",
        "z": "c520903.54f9f7",
        "host": "1.2.3.4",
        "community": "public",
        "version": "1",
        "oids": "1.3.6.1.4.1.2021.10.1.3.3",
        "name": "Load 15m",
        "x": 282.5,
        "y": 328,
        "wires": [
            [
                "1961cf06.a70791"
            ]
        ]
    },
    {
        "id": "9e81a37a.e6892",
        "type": "function",
        "z": "c520903.54f9f7",
        "name": "OK",
        "func": "var msg1 = { payload: msg.payload.length };\nmsg1.payload = msg.payload[0].value;\nmsg1.topic=\"load1\";\nreturn msg1;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 430.5,
        "y": 253,
        "wires": [
            [
                "ce785b18.bce298"
            ]
        ]
    },
    {
        "id": "41880790.68dbb8",
        "type": "function",
        "z": "c520903.54f9f7",
        "name": "OK",
        "func": "var msg1 = { payload: msg.payload.length };\nmsg1.payload = msg.payload[0].value;\nmsg1.topic=\"load5\";\nreturn msg1;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 430.5,
        "y": 288,
        "wires": [
            [
                "ce785b18.bce298"
            ]
        ]
    },
    {
        "id": "1961cf06.a70791",
        "type": "function",
        "z": "c520903.54f9f7",
        "name": "OK",
        "func": "var msg1 = { payload: msg.payload.length };\nmsg1.payload = msg.payload[0].value;\nmsg1.topic=\"load15\";\nreturn msg1;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 429.5,
        "y": 327,
        "wires": [
            [
                "ce785b18.bce298"
            ]
        ]
    },
    {
        "id": "7ac99f36.92496",
        "type": "influxdb out",
        "z": "c520903.54f9f7",
        "influxdb": "d7adbe37.624be",
        "name": "",
        "measurement": "health",
        "precision": "",
        "retentionPolicy": "",
        "x": 1025.5,
        "y": 301,
        "wires": []
    },
    {
        "id": "ce785b18.bce298",
        "type": "function",
        "z": "c520903.54f9f7",
        "name": "Merge",
        "func": "context.data = context.data || {};\n\nswitch (msg.topic) {\n    case \"uptime\":\n        context.data.uptime = msg.payload;\n        msg = null;\n        break;\n    case \"load1\":\n        context.data.load1 = msg.payload;\n        msg = null;\n        break;\n    case \"load5\":\n        context.data.load5 = msg.payload;\n        msg = null;\n        break;\n    case \"load15\":\n        context.data.load15 = msg.payload;\n        msg = null;\n        break;\n    case \"temp\":\n        context.data.temp = msg.payload;\n        msg = null;\n        break;  \n        \n    default:\n        msg = null;\n    \tbreak;\n\n}\n\nif(context.data.uptime != null && context.data.load1 != null && context.data.load5 != null && context.data.load15 != null && context.data.temp != null ) {\n\tmsg2 = {};\n    msg2.payload = [{\"uptime\": context.data.uptime, \"temp\": context.data.temp, \"load1\": context.data.load1, \"load5\": context.data.load5, \"load15\": context.data.load15}];\n    context.data=null;\n\treturn msg2;\n} ",
        "outputs": 1,
        "noerr": 0,
        "x": 661.5,
        "y": 287,
        "wires": [
            [
                "7ac99f36.92496"
            ]
        ]
    },
    {
        "id": "86d5185e.012cb8",
        "type": "snmp",
        "z": "c520903.54f9f7",
        "host": "1.2.3.4",
        "community": "public",
        "version": "1",
        "oids": "1.3.6.1.4.1.2021.4.5.0",
        "name": "total memory",
        "x": 280.5,
        "y": 412,
        "wires": [
            [
                "502295cb.195c0c"
            ]
        ]
    },
    {
        "id": "13a01d2f.1ab663",
        "type": "snmp",
        "z": "c520903.54f9f7",
        "host": "1.2.3.4",
        "community": "public",
        "version": "1",
        "oids": "1.3.6.1.4.1.2021.9.1.6.1",
        "name": "/ size",
        "x": 256.5,
        "y": 562,
        "wires": [
            [
                "931b413d.f4b24"
            ]
        ]
    },
    {
        "id": "134668ed.74eef7",
        "type": "snmp",
        "z": "c520903.54f9f7",
        "host": "1.2.3.4",
        "community": "public",
        "version": "1",
        "oids": "1.3.6.1.4.1.2021.9.1.7.1",
        "name": "/ free",
        "x": 248.5,
        "y": 611,
        "wires": [
            [
                "e46b6255.8bc61"
            ]
        ]
    },
    {
        "id": "4bc0356b.7675ac",
        "type": "snmp",
        "z": "c520903.54f9f7",
        "host": "1.2.3.4",
        "community": "public",
        "version": "1",
        "oids": "1.3.6.1.4.1.2021.4.15.0",
        "name": "mem chached",
        "x": 286.5,
        "y": 447,
        "wires": [
            [
                "e8b3759d.21ed68"
            ]
        ]
    },
    {
        "id": "508d1ba8.f7fd44",
        "type": "snmp",
        "z": "c520903.54f9f7",
        "host": "1.2.3.4",
        "community": "public",
        "version": "1",
        "oids": "1.3.6.1.4.1.2021.4.14.0",
        "name": "mem buff",
        "x": 276.5,
        "y": 489,
        "wires": [
            [
                "671fce9f.a45a2"
            ]
        ]
    },
    {
        "id": "7353acd6.7e5b14",
        "type": "snmp",
        "z": "c520903.54f9f7",
        "host": "1.2.3.4",
        "community": "public",
        "version": "1",
        "oids": "1.3.6.1.4.1.2021.4.6.0",
        "name": "mem free",
        "x": 270.5,
        "y": 528,
        "wires": [
            [
                "dcd342a2.4c29f"
            ]
        ]
    },
    {
        "id": "502295cb.195c0c",
        "type": "function",
        "z": "c520903.54f9f7",
        "name": "",
        "func": "var msg1 = { payload: msg.payload.length };\nmsg1.payload = msg.payload[0].value;\nmsg1.topic=\"memorytotal\";\nreturn msg1;",
        "outputs": 1,
        "noerr": 0,
        "x": 455,
        "y": 412,
        "wires": [
            [
                "5bfa3c4d.cf8714"
            ]
        ]
    },
    {
        "id": "671fce9f.a45a2",
        "type": "function",
        "z": "c520903.54f9f7",
        "name": "",
        "func": "var msg1 = { payload: msg.payload.length };\nmsg1.payload = msg.payload[0].value;\nmsg1.topic=\"memorybuff\";\nreturn msg1;",
        "outputs": 1,
        "noerr": 0,
        "x": 454.5,
        "y": 490,
        "wires": [
            [
                "5bfa3c4d.cf8714"
            ]
        ]
    },
    {
        "id": "5bfa3c4d.cf8714",
        "type": "function",
        "z": "c520903.54f9f7",
        "name": "Memory Usage",
        "func": "context.data = context.data || {};\n\nswitch (msg.topic) {\n    case \"memorytotal\":\n        context.data.memorytotal = msg.payload;\n        msg = null;\n        break;\n    case \"memorycached\":\n        context.data.memorycached = msg.payload;\n        msg = null;\n        break;\n    case \"memorybuff\":\n        context.data.memorybuff = msg.payload;\n        msg = null;\n        break;\n    case \"memoryfree\":\n        context.data.memoryfree = msg.payload;\n        msg = null;\n        break;\n \n        \n    default:\n        msg = null;\n    \tbreak;\n\n}\n\nif(context.data.memorytotal != null && context.data.memorycached != null && context.data.memorybuff != null && context.data.memoryfree != null) {\n\tmsg2 = {};\n    msg2.payload = (context.data.memorytotal - (context.data.memoryfree + context.data.memorybuff + context.data.memorycached)) / context.data.memorytotal * 100;\n    context.data=null;\n    msg2.payload = Number((msg2.payload).toFixed(1));\n    msg2.topic=\"memoryload\";\n\treturn msg2;\n} ",
        "outputs": 1,
        "noerr": 0,
        "x": 643.5,
        "y": 469,
        "wires": [
            [
                "3f5fc774.5e33f8"
            ]
        ]
    },
    {
        "id": "e8b3759d.21ed68",
        "type": "function",
        "z": "c520903.54f9f7",
        "name": "",
        "func": "var msg1 = { payload: msg.payload.length };\nmsg1.payload = msg.payload[0].value;\nmsg1.topic=\"memorycached\";\nreturn msg1;",
        "outputs": 1,
        "noerr": 0,
        "x": 455.5,
        "y": 448,
        "wires": [
            [
                "5bfa3c4d.cf8714"
            ]
        ]
    },
    {
        "id": "dcd342a2.4c29f",
        "type": "function",
        "z": "c520903.54f9f7",
        "name": "",
        "func": "var msg1 = { payload: msg.payload.length };\nmsg1.payload = msg.payload[0].value;\nmsg1.topic=\"memoryfree\";\nreturn msg1;",
        "outputs": 1,
        "noerr": 0,
        "x": 453.5,
        "y": 527,
        "wires": [
            [
                "5bfa3c4d.cf8714"
            ]
        ]
    },
    {
        "id": "931b413d.f4b24",
        "type": "function",
        "z": "c520903.54f9f7",
        "name": "",
        "func": "var msg1 = { payload: msg.payload.length };\nmsg1.payload = msg.payload[0].value;\nmsg1.topic=\"volumesize\";\nreturn msg1;",
        "outputs": 1,
        "noerr": 0,
        "x": 454.5,
        "y": 563,
        "wires": [
            [
                "483faa24.fdfef4"
            ]
        ]
    },
    {
        "id": "e46b6255.8bc61",
        "type": "function",
        "z": "c520903.54f9f7",
        "name": "",
        "func": "var msg1 = { payload: msg.payload.length };\nmsg1.payload = msg.payload[0].value;\nmsg1.topic=\"volumefree\";\nreturn msg1;",
        "outputs": 1,
        "noerr": 0,
        "x": 451.5,
        "y": 611,
        "wires": [
            [
                "483faa24.fdfef4"
            ]
        ]
    },
    {
        "id": "483faa24.fdfef4",
        "type": "function",
        "z": "c520903.54f9f7",
        "name": "Volume Usage",
        "func": "context.data = context.data || {};\n\nswitch (msg.topic) {\n    case \"volumesize\":\n        context.data.volumesize = msg.payload;\n        msg = null;\n        break;\n    case \"volumefree\":\n        context.data.volumefree = msg.payload;\n        msg = null;\n        break;\n\n \n        \n    default:\n        msg = null;\n    \tbreak;\n\n}\n\nif(context.data.volumefree != null && context.data.volumesize != null) {\n\tmsg2 = {};\n    msg2.payload = (context.data.volumesize - context.data.volumefree) / context.data.volumesize * 100;\n    context.data=null;\n    msg2.payload = Number((msg2.payload).toFixed(1));\n\tmsg2.topic=\"volumeload\";\n\treturn msg2;\n} ",
        "outputs": 1,
        "noerr": 0,
        "x": 650.5,
        "y": 578,
        "wires": [
            [
                "3f5fc774.5e33f8"
            ]
        ]
    },
    {
        "id": "3f5fc774.5e33f8",
        "type": "function",
        "z": "c520903.54f9f7",
        "name": "Volume-Memory-Swap",
        "func": "context.data = context.data || {};\n\nswitch (msg.topic) {\n    case \"memoryload\":\n        context.data.memoryload = msg.payload;\n        msg = null;\n        break;\n    case \"volumeload\":\n        context.data.volumeload = msg.payload;\n        msg = null;\n        break;\n    case \"swapusage\":\n        context.data.swapusage = msg.payload;\n        msg = null;\n        break;\n \n        \n    default:\n        msg = null;\n    \tbreak;\n\n}\n\nif(context.data.memoryload != null && context.data.volumeload != null && context.data.swapusage != null) {\n\tmsg2 = {};\n    msg2.payload = [{\"Memory\": context.data.memoryload, \"Volume\": context.data.volumeload, \"Swap\": context.data.swapusage}];\n\tcontext.data=null;\n\treturn msg2;\n} ",
        "outputs": 1,
        "noerr": 0,
        "x": 889.5,
        "y": 475,
        "wires": [
            [
                "61c526d4.c93e78"
            ]
        ]
    },
    {
        "id": "8ed7c34.dc9384",
        "type": "snmp",
        "z": "c520903.54f9f7",
        "host": "1.2.3.4",
        "community": "public",
        "version": "1",
        "oids": "1.3.6.1.4.1.2021.4.3.0",
        "name": "total swap",
        "x": 258.5,
        "y": 660,
        "wires": [
            [
                "b9e6aefb.d356"
            ]
        ]
    },
    {
        "id": "42d18d30.edffc4",
        "type": "snmp",
        "z": "c520903.54f9f7",
        "host": "1.2.3.4",
        "community": "public",
        "version": "1",
        "oids": "1.3.6.1.4.1.2021.4.4.0",
        "name": "free swap",
        "x": 250.5,
        "y": 709,
        "wires": [
            [
                "cafade4c.2395d"
            ]
        ]
    },
    {
        "id": "b9e6aefb.d356",
        "type": "function",
        "z": "c520903.54f9f7",
        "name": "",
        "func": "var msg1 = { payload: msg.payload.length };\nmsg1.payload = msg.payload[0].value;\nmsg1.topic=\"swaptotal\";\nreturn msg1;",
        "outputs": 1,
        "noerr": 0,
        "x": 446.5,
        "y": 661,
        "wires": [
            [
                "a937368e.d2e668"
            ]
        ]
    },
    {
        "id": "cafade4c.2395d",
        "type": "function",
        "z": "c520903.54f9f7",
        "name": "",
        "func": "var msg1 = { payload: msg.payload.length };\nmsg1.payload = msg.payload[0].value;\nmsg1.topic=\"swapfree\";\nreturn msg1;",
        "outputs": 1,
        "noerr": 0,
        "x": 443.5,
        "y": 709,
        "wires": [
            [
                "a937368e.d2e668"
            ]
        ]
    },
    {
        "id": "a937368e.d2e668",
        "type": "function",
        "z": "c520903.54f9f7",
        "name": "Swap Usage",
        "func": "context.data = context.data || {};\n\nswitch (msg.topic) {\n    case \"swaptotal\":\n        context.data.swaptotal = msg.payload;\n        msg = null;\n        break;\n    case \"swapfree\":\n        context.data.swapfree = msg.payload;\n        msg = null;\n        break;\n\n \n        \n    default:\n        msg = null;\n    \tbreak;\n\n}\n\nif(context.data.swaptotal != null && context.data.swapfree != null) {\n\tmsg2 = {};\n    msg2.payload = (context.data.swaptotal - context.data.swapfree) / context.data.swaptotal * 100;\n    context.data=null;\n    msg2.payload = Number((msg2.payload).toFixed(1));\n\tmsg2.topic=\"swapusage\";\n\treturn msg2;\n} ",
        "outputs": 1,
        "noerr": 0,
        "x": 634.5,
        "y": 687,
        "wires": [
            [
                "3f5fc774.5e33f8"
            ]
        ]
    },
    {
        "id": "61c526d4.c93e78",
        "type": "influxdb out",
        "z": "c520903.54f9f7",
        "influxdb": "d7adbe37.624be",
        "name": "",
        "measurement": "usage",
        "precision": "",
        "retentionPolicy": "",
        "x": 954.5,
        "y": 556,
        "wires": []
    },
    {
        "id": "d7adbe37.624be",
        "type": "influxdb",
        "z": "",
        "hostname": "127.0.0.1",
        "port": "8086",
        "protocol": "http",
        "database": "raspberry",
        "name": "",
        "usetls": false,
        "tls": ""
    }
]
