const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb://localhost/kevDemo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB'));

const Avatar = mongoose.model(
  'Avatar',
  new mongoose.Schema({
    code_image: String,
    skin_color: String,
    cloth_color: String,
    hair_color: String
  })
);

async function createAvatar(skin, cloth, hair) {
  const avatar = new Avatar({
    code_image:
      'https://www.google.com.gt/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjtoNarvsjdAhXS_aQKHRSaDXYQjRx6BAgBEAU&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AAntu_application-default-icon.svg&psig=AOvVaw3ydq154vVZ5mLsBQoJvIDQ&ust=1537495249971482',
    skin_color: skin,
    cloth_color: cloth,
    hair_color: hair
  });

  const result = await avatar.save();
  console.log(result);
}

//createAvatar('white', 'black', 'black');

exports.Avatar = Avatar;
