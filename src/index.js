import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/products').default);
app.model(require('./models/register').default);
app.model(require('./models/login').default);
app.model(require('./models/user').default);
app.model(require('./models/todo').default);
app.model(require('./models/goods').default);
app.model(require('./models/buyGoods').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
