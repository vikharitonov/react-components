import React from "react";
import { useNavigate } from "react-router-dom";
import { TextHeading } from "../../components/Text";
import { DpHeader } from "./components/DpHeader";

import './DocumentationPage.css'


const DocumentationPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <DpHeader title={"George Orwell. 1984"}/>
      <main className="dp-main">
        <nav className="dp-contents">
          <ul>
            <li>
              <TextHeading asTag="h4" text="Part One" />
              <ul>
                <li>Chapter 1</li>
                <li>Chapter 2</li>
                <li>Chapter 3</li>
                <li>Chapter 4</li>
                <li>Chapter 5</li>
                <li>Chapter 6</li>
                <li>Chapter 7</li>
                <li>Chapter 8</li>
              </ul>
            </li>
            <li>
              <TextHeading asTag="h4" text="Part Two" />
              <ul>
                <li>Chapter 1</li>
                <li>Chapter 2</li>
                <li>Chapter 3</li>
                <li>Chapter 4</li>
                <li>Chapter 5</li>
                <li>Chapter 6</li>
                <li>Chapter 7</li>
                <li>Chapter 8</li>
                <li>Chapter 9</li>
              </ul>
            </li>
            <li>
              <TextHeading asTag="h4" text="Part Three" />
              <ul>
                <li>Chapter 1</li>
                <li>Chapter 2</li>
                <li>Chapter 3</li>
                <li>Chapter 4</li>
                <li>Chapter 5</li>
                <li>Chapter 6</li>
              </ul>
            </li>
          </ul>
        </nav>
        <section className="dp-section">
          <TextHeading asTag="h2" text="Part One" />
          <article>
            <TextHeading asTag="h3" text="Chapter 1" />
            <p>
              It was a bright cold day in April, and the clocks were striking
              thirteen. Winston Smith, his chin nuzzled into his breast in an
              effort to escape the vile wind, slipped quickly through the glass
              doors of Victory Mansions, though not quickly enough to prevent a
              swirl of gritty dust from entering along with him.
            </p>
            <p>
              The hallway smelt of boiled cabbage and old rag mats. At one end
              of it a coloured poster, too large for indoor display, had been
              tacked to the wall. It depicted simply an enormous face, more than
              a metre wide: the face of a man of about forty-five, with a heavy
              black moustache and ruggedly handsome features. Winston made for
              the stairs. It was no use trying the lift. Even at the best of
              times it was seldom working, and at present the electric current
              was cut off during daylight hours. It was part of the economy
              drive in preparation for Hate Week. The flat was seven flights up,
              and Winston, who was thirty-nine and had a varicose ulcer above
              his right ankle, went slowly, resting several times on the way. On
              each landing, opposite the lift-shaft, the poster with the
              enormous face gazed from the wall. It was one of those pictures
              which are so contrived that the eyes follow you about when you
              move. BIG BROTHER IS WATCHING YOU, the caption beneath it ran.
            </p>
          </article>
          <article>
            <TextHeading asTag="h3" text="Chapter 2" />

            <p>
              As he put his hand to the door-knob Winston saw that he had left
              the diary open on the table. DOWN WITH BIG BROTHER was written all
              over it, in letters almost big enough to be legible across the
              room. It was an inconceivably stupid thing to have done. But, he
              realized, even in his panic he had not wanted to smudge the creamy
              paper by shutting the book while the ink was wet.
            </p>
            <p>
              He drew in his breath and opened the door. Instantly a warm wave
              of relief flowed through him. A colourless, crushed-looking woman,
              with wispy hair and a lined face, was standing outside.
            </p>
            <p>
              ‘Oh, comrade,’ she began in a dreary, whining sort of voice, ‘I
              thought I heard you come in. Do you think you could come across
              and have a look at our kitchen sink? It’s got blocked up and——’
            </p>
            <p>
              It was Mrs Parsons, the wife of a neighbour on the same floor.
              (’Mrs’ was a word somewhat discountenanced by the Party—you were
              supposed to call everyone ‘comrade’— but with some women one used
              it instinctively.) She was a woman of about thirty, but looking
              much older. One had the impression that there was dust in the
              creases of her face. Winston followed her down the passage. These
              amateur repair jobs were an almost daily irritation. Victory
              Mansions were old flats, built in 1930 or thereabouts, and were
              falling
            </p>
          </article>
          <article>
            <TextHeading asTag="h3" text="Chapter 1" />
            <p>
              It was a bright cold day in April, and the clocks were striking
              thirteen. Winston Smith, his chin nuzzled into his breast in an
              effort to escape the vile wind, slipped quickly through the glass
              doors of Victory Mansions, though not quickly enough to prevent a
              swirl of gritty dust from entering along with him.
            </p>
            <p>
              The hallway smelt of boiled cabbage and old rag mats. At one end
              of it a coloured poster, too large for indoor display, had been
              tacked to the wall. It depicted simply an enormous face, more than
              a metre wide: the face of a man of about forty-five, with a heavy
              black moustache and ruggedly handsome features. Winston made for
              the stairs. It was no use trying the lift. Even at the best of
              times it was seldom working, and at present the electric current
              was cut off during daylight hours. It was part of the economy
              drive in preparation for Hate Week. The flat was seven flights up,
              and Winston, who was thirty-nine and had a varicose ulcer above
              his right ankle, went slowly, resting several times on the way. On
              each landing, opposite the lift-shaft, the poster with the
              enormous face gazed from the wall. It was one of those pictures
              which are so contrived that the eyes follow you about when you
              move. BIG BROTHER IS WATCHING YOU, the caption beneath it ran.
            </p>
          </article>
          <article>
            <TextHeading asTag="h3" text="Chapter 2" />

            <p>
              As he put his hand to the door-knob Winston saw that he had left
              the diary open on the table. DOWN WITH BIG BROTHER was written all
              over it, in letters almost big enough to be legible across the
              room. It was an inconceivably stupid thing to have done. But, he
              realized, even in his panic he had not wanted to smudge the creamy
              paper by shutting the book while the ink was wet.
            </p>
            <p>
              He drew in his breath and opened the door. Instantly a warm wave
              of relief flowed through him. A colourless, crushed-looking woman,
              with wispy hair and a lined face, was standing outside.
            </p>
            <p>
              ‘Oh, comrade,’ she began in a dreary, whining sort of voice, ‘I
              thought I heard you come in. Do you think you could come across
              and have a look at our kitchen sink? It’s got blocked up and——’
            </p>
            <p>
              It was Mrs Parsons, the wife of a neighbour on the same floor.
              (’Mrs’ was a word somewhat discountenanced by the Party—you were
              supposed to call everyone ‘comrade’— but with some women one used
              it instinctively.) She was a woman of about thirty, but looking
              much older. One had the impression that there was dust in the
              creases of her face. Winston followed her down the passage. These
              amateur repair jobs were an almost daily irritation. Victory
              Mansions were old flats, built in 1930 or thereabouts, and were
              falling
            </p>
          </article>
          <article>
            <TextHeading asTag="h3" text="Chapter 1" />
            <p>
              It was a bright cold day in April, and the clocks were striking
              thirteen. Winston Smith, his chin nuzzled into his breast in an
              effort to escape the vile wind, slipped quickly through the glass
              doors of Victory Mansions, though not quickly enough to prevent a
              swirl of gritty dust from entering along with him.
            </p>
            <p>
              The hallway smelt of boiled cabbage and old rag mats. At one end
              of it a coloured poster, too large for indoor display, had been
              tacked to the wall. It depicted simply an enormous face, more than
              a metre wide: the face of a man of about forty-five, with a heavy
              black moustache and ruggedly handsome features. Winston made for
              the stairs. It was no use trying the lift. Even at the best of
              times it was seldom working, and at present the electric current
              was cut off during daylight hours. It was part of the economy
              drive in preparation for Hate Week. The flat was seven flights up,
              and Winston, who was thirty-nine and had a varicose ulcer above
              his right ankle, went slowly, resting several times on the way. On
              each landing, opposite the lift-shaft, the poster with the
              enormous face gazed from the wall. It was one of those pictures
              which are so contrived that the eyes follow you about when you
              move. BIG BROTHER IS WATCHING YOU, the caption beneath it ran.
            </p>
          </article>
          <article>
            <TextHeading asTag="h3" text="Chapter 2" />

            <p>
              As he put his hand to the door-knob Winston saw that he had left
              the diary open on the table. DOWN WITH BIG BROTHER was written all
              over it, in letters almost big enough to be legible across the
              room. It was an inconceivably stupid thing to have done. But, he
              realized, even in his panic he had not wanted to smudge the creamy
              paper by shutting the book while the ink was wet.
            </p>
            <p>
              He drew in his breath and opened the door. Instantly a warm wave
              of relief flowed through him. A colourless, crushed-looking woman,
              with wispy hair and a lined face, was standing outside.
            </p>
            <p>
              ‘Oh, comrade,’ she began in a dreary, whining sort of voice, ‘I
              thought I heard you come in. Do you think you could come across
              and have a look at our kitchen sink? It’s got blocked up and——’
            </p>
            <p>
              It was Mrs Parsons, the wife of a neighbour on the same floor.
              (’Mrs’ was a word somewhat discountenanced by the Party—you were
              supposed to call everyone ‘comrade’— but with some women one used
              it instinctively.) She was a woman of about thirty, but looking
              much older. One had the impression that there was dust in the
              creases of her face. Winston followed her down the passage. These
              amateur repair jobs were an almost daily irritation. Victory
              Mansions were old flats, built in 1930 or thereabouts, and were
              falling
            </p>
          </article>
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default DocumentationPage;
