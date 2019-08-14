const nanoTest  = new (require('nanoTest')).test();
const httpscdn  = new (require('./index.js')).cdn(['test.com'],1);


nanoTest.add(
    'simple test',
    {
        "function":httpscdn.get,
        "options":[]
     },
     "==",
     "https://test.com"
);

nanoTest.run();



