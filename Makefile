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

publish:
	npm publish

lint:
	npm run eslint .

