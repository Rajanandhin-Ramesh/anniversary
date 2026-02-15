import { useEffect, useState } from "react";
import "../styles/romantic.css";

const message = `
Vivek rasa ❤️,

I hope you are happy with this small gift.
Right now, I may not have a job,
but I wanted to create something meaningful for you
with what I have — my love and my effort.

Happy Anniversary, my love 💖
And congratulations on your next big step —
I am so proud of you. 🌟

I truly wish we walk this journey together, hand in hand…
Not as two individuals,
but as a couple who understands, heals, and grows together.

Let’s fix our problems,
bring more peace into our life,
and build a future filled with calm, love, and happiness. 🤍

This website may not be perfect…
But it is made with all my heart.
And maybe one day,
I will make it even more beautiful —
just like the life I dream of with you. 💕

Forever yours 💖
`;

function Forever() {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(message.slice(0, i));
      i++;
      if (i > message.length) clearInterval(interval);
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="forever-bg">
      <div className="forever-card">
        <h1 className="forever-title">💖 Our Forever 💖</h1>
        <pre className="typing-text">{text}</pre>
      </div>
    </div>
  );
}

export default Forever;
