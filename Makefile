install:
	npm install

gcd:
	npm run babel-node -- 'src/bin/brain-gcd.js'

even:
	npm run babel-node -- 'src/bin/brain-even.js'

calc:
	npm run babel-node -- 'src/bin/brain-calc.js'

balance:
	npm run babel-node -- 'src/bin/brain-balance.js'

progression:
	npm run babel-node -- 'src/bin/brain-progression.js'

prime:
	npm run babel-node -- 'src/bin/brain-prime.js' 

publish:
	npm publish

lint:
	npm run eslint .

