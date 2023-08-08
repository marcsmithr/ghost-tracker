const { Agent, Review } = require('../server/model')


/* NOTE: THIS WILL DROP THE CURRENT DATABASE */
seed();

async function seed() {
  /* Create the table for the agents */
  await Agent.sync({ force: true })
  await Review.sync({force: true})

  /* Insert the data */
  await Promise.all([
    Agent.create({
      firstName: 'Craig',
      lastName: 'Hudson',
      photoUrl: 'https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ',
      agentLicence: '1234567890',
      address: '908 Bel Air Rd, Los Angeles, CA 90077',
      practiceAreas: ['Los Angeles', 'San Diego', 'New York', 'Miami'].join(','),
      aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique. Dui accumsan sit amet nulla facilisi morbi tempus. Fringilla urna porttitor rhoncus dolor purus non. Vitae et leo duis ut diam quam. Eget nunc scelerisque viverra mauris. Sed velit dignissim sodales ut eu. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Nunc non blandit massa enim. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent.'
    }),
    Agent.create({
      firstName: 'John',
      lastName: 'White',
      photoUrl: 'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
      agentLicence: '0987654321',
      address: '308 Vista De La Playa, La Jolla, CA 92037',
      practiceAreas: ['San Diego'].join(','),
      aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique. Dui accumsan sit amet nulla facilisi morbi tempus. Fringilla urna porttitor rhoncus dolor purus non. Vitae et leo duis ut diam quam. Eget nunc scelerisque viverra mauris. Sed velit dignissim sodales ut eu. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Nunc non blandit massa enim. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent.'
    }),
    Agent.create({
      firstName: 'Jorge',
      lastName: 'Hutchens',
      photoUrl: 'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk',
      agentLicence: '1234098756',
      address: '6800 Fisher Is Unit 6802 PH-2, Miami Beach, FL 33109',
      practiceAreas: ['Miami', 'New York'].join(','),
      aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique. Dui accumsan sit amet nulla facilisi morbi tempus. Fringilla urna porttitor rhoncus dolor purus non. Vitae et leo duis ut diam quam. Eget nunc scelerisque viverra mauris. Sed velit dignissim sodales ut eu. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Nunc non blandit massa enim. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent.'
    }),
    Agent.create({
      firstName: 'Alex',
      lastName: 'Forbes',
      agentLicence: '123321890',
      address: '53 W 53rd St, New York, NY 10019, United States',
      practiceAreas: ['New York'].join(','),
      aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique. Dui accumsan sit amet nulla facilisi morbi tempus. Fringilla urna porttitor rhoncus dolor purus non. Vitae et leo duis ut diam quam. Eget nunc scelerisque viverra mauris. Sed velit dignissim sodales ut eu. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl rhoncus mattis. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Nunc non blandit massa enim. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent.'
    }),
    Review.create({
      agentId: '1',
      stars: '4',
      review: 'Augue interdum velit euismod in. Dapibus ultrices in iaculis nunc sed augue. Maecenas ultricies mi eget mauris pharetra et ultrices. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae.'
    }),
    Review.create({
      agentId: '1',
      stars: '5',
      review: 'Elementum nibh tellus molestie nunc non blandit. Tellus id interdum velit laoreet.'
    }),
    Review.create({
      agentId: '1',
      stars: '4',
      review: 'Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Tempor orci dapibus ultrices in iaculis nunc. Integer enim neque volutpat ac tincidunt vitae semper quis.'
    }),
    Review.create({
      agentId: '1',
      stars: '3',
      review: 'Augue interdum velit euismod in. Dapibus ultrices in iaculis nunc sed augue. Maecenas ultricies mi eget mauris pharetra et ultrices. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae.'
    }),
    Review.create({
      agentId: '1',
      stars: '4',
      review: 'Mauris sit amet massa vitae tortor condimentum lacinia. Proin libero nunc consequat interdum varius sit amet mattis vulputate. Pretium nibh ipsum consequat nisl vel pretium lectus quam.'
    }),
    Review.create({
      agentId: '2',
      stars: '3',
      review: 'Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Tempor orci dapibus ultrices in iaculis nunc.'
    }),
    Review.create({
      agentId: '3',
      stars: '5',
      review: ' Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Sagittis id consectetur purus ut faucibus pulvinar.'
    })

  ])
}
