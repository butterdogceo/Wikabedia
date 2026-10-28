async function createDefaults() {
  try {
    while (!done) {
      await new Promise(resolve => setTimeout(resolve, 150)); // Wait
    }

    // Shuffle the data
    const shuffledData = data.slice();
    for (let i = shuffledData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }

    let randomItems = [];
    for (const item of shuffledData) {
      if (randomItems.length >= 5) break;
      if (item.approved === 'no' || !item.title || !item.image || !item.link) continue;
      randomItems.push(item);
    }

    randomItems.forEach(item => {
      if (item.desc === null) {
        item.desc = "no descwiption";
      }
      
      addCard(item.title, item.desc, item.image, item.link, "recomend");
    });
  } catch (error) {
    console.error(error);
  }
}

setTimeout(createDefaults, 100);
