const nanoTest  = new (require("nanoTest")).test();
const cdn  = new (require("./index.js")).cdn();
const testCDNs = [
    'example.com',
    'exampleA.com',
    'exampleB.com'
]



nanoTest.add(
    "add cdn",
    {
        "function":cdn.add,
        "options":[testCDNs[0]]
    }, 
    true
);

nanoTest.add(
    "cdn second cdn",
    {
        "function":cdn.add,
        "options":[testCDNs[1]]
    }, 
    true
);
nanoTest.add(
    "cdn three cdn",
    {
        "function":cdn.add,
        "options":[testCDNs[2]]
    }, 
    true
);
nanoTest.add(
    "cdn three again",
    {
        "function":cdn.add,
        "options":[testCDNs[2]]
    }, 
    false 
);
nanoTest.add(
    "get https force",
    {
        "function":cdn.getHttpsForce,
        "options":[]
    },
    "==",
    false
);
nanoTest.add(
    "get test 1",
    {
        "function":cdn.get,
        "options":[]
    },
    "==",
    "//"+testCDNs[0]+"/"
);

nanoTest.add(
    "get test 2",
    {
        "function":cdn.get,
        "options":[]
    },
    "==",
    "//"+testCDNs[0]+"/"
);


nanoTest.add(
    "set https force",
    {
        "function":cdn.setHttpsForce,
        "options":[true]
    },
    "==",
    true
);
nanoTest.add(
    "get https force",
    {
        "function":cdn.getHttpsForce,
        "options":[]
    },
    "==",
   true 
);
nanoTest.add(
    "get test 1",
    {
        "function":cdn.get,
        "options":[]
    },
    "==",
    "https://"+testCDNs[0]+"/"
);

nanoTest.add(
    "get test 2",
    {
        "function":cdn.get,
        "options":[]
    },
    "==",
    "https://"+testCDNs[0]+"/"
);
nanoTest.add(
    "get logic",
    {
        "function":cdn.getLogic,
        "options":[]
    },
    "==",
    0
);
nanoTest.add(
    "set logic",
    {
        "function":cdn.setLogic,
        "options":[1]
    },
    "==",
    true 
);
nanoTest.add(
    "get https force",
    {
        "function":cdn.getLogic,
        "options":[]
    },
    "==",
    1
);
nanoTest.add(
    "get test 1",
    {
        "function":cdn.get,
        "options":[]
    },
    "==",
    "https://"+testCDNs[0]+"/"
);

nanoTest.add(
    "get test 2",
    {
        "function":cdn.get,
        "options":[]
    },
    "==",
    "https://"+testCDNs[1]+"/"
);

nanoTest.add(
    "get test 3",
    {
        "function":cdn.get,
        "options":[]
    },
    "==",
    "https://"+testCDNs[2]+"/"
);

nanoTest.run();



