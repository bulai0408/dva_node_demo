import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true }, function (err) {
    if (err) {
        console.log('Connection Error:' + err)
    } else {
        console.log('Connection success!')
    }
});

const userSchema = new mongoose.Schema(
    {
        //设置studentSchema信息的数据格式
        username: { type: String },
        password: { type: String },
        sex: { type: String },
        age: { type: Number },
        phone: { type: String },
        email: { type: String },
        other: { type: String },
    },
    //{versionKey: false}是干嘛用？如果不加这个设置，我们通过mongoose第一次创建某个集合时，
    // 它会给这个集合设定一个versionKey属性值，我们不需要，所以不让它显示
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'updated'
        },
        versionKey: false
    }
)

var todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        content: {
            type: String,
            require: true
        },
        userId: {
            type: String,
            required: true
        }
    },
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'updated'
        },
        versionKey: false
    }
);

var goodSchema = new mongoose.Schema(
    {
        goodsName: {
            type: String,
            require: true
        },
        goodsId: {
            type: String,
            require: true
        },
        number: {
            type: Number,
            require: true
        },
        money: {
            type: Number,
            required: true
        },
        maxPurchaseNumber: {
            type: Number,
            required: false
        },
        minPurchaseNumber: {
            type: Number,
            required: false
        },
        unit: {//单位
            type: String,
            required: false
        }
    },
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'updated'
        },
        versionKey: false
    }
);

/**用户 */
const user = mongoose.model('user', userSchema)
/**代办 */
const todo = mongoose.model('todo', todoSchema)
/**商品 */
const good = mongoose.model('good', goodSchema)

export {
    user,
    todo,
    good
};


