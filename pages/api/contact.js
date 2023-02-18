import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.gvuvm7e.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    console.log(connectionString);
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}

export default handler;




recipes/keto/bulletproof-coffee.png
recipes/keto/pancakes.png
recipes/keto/peanut-butter-smoothie.png
recipes/keto/blueberry-smoothie.png
recipes/keto/blueberry-hemp-seed-porridge.png
recipes/keto/perfect-keto-breakfast.png
recipes/keto/savoury-breakfast-biscuits.png
recipes/keto/breakfast-snack-plate.png
recipes/keto/cauliflower-hash-brown.png
recipes/keto/avocado-egg-cups.png
recipes/keto/broccoli-salad.png
recipes/keto/egg-salad.png
recipes/keto/cheeseburger-salad.png
recipes/keto/chicken-salad.png
recipes/keto/chicken-bacon-ranch-lettuce-wraps.png
recipes/keto/cauliflower-mac-and-cheese.png
recipes/keto/crustless-mini-quiche.png
recipes/keto/caprese-stuffed-avocados.png
recipes/keto/chicken-stuffed-avocados.png
recipes/keto/avocado-pesto-pasta.png
recipes/keto/zucchini-tuna-melts.png
recipes/keto/zucchini-boats.png
recipes/keto/coconut-crusted-cod.png
recipes/keto/mexican-cauliflower-rice.png
recipes/keto/taco-salad.png
recipes/keto/beef-chilli.png
recipes/keto/tzatziki-lamb-burgers.png
recipes/keto/mini-meatloaf-and-cauliflower-mash.png
recipes/keto/garlic-butter-salmon-and-mashed-cauliflower.png
recipes/keto/butter-chicken.png
recipes/keto/stuffed-portobello-mushrooms.png
recipes/keto/peanut-butter-fat-bomb.png
recipes/keto/cheesy-zucchini-chips.png
recipes/keto/blueberry-cheesecake-fat-bomb.png
recipes/keto/coconut-chia-pudding.png
recipes/keto/avocado-deviled-eggs.png
recipes/keto/snack-skewer.png
recipes/keto/turkey-and-cheese-roll-ups.png
recipes/keto/crackers-and-cheese.png
recipes/keto/everything-bagel-celery.png