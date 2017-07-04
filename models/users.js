var User = require('../lib/mongo').User;
console.log('User', User);
module.exports = {
    // 注册一个用户
    create: function create(user) {
        return User.create(user).exec();
        // return User.insert(user).exec();
    }
};