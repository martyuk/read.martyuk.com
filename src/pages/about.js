import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { rhythm } from "../utils/typography"

export default props => (
  <Layout>
  <SEO title="Об авторе"/>
  <div 
    style={{
      maxWidth: rhythm(10),
      paddingBottom: rhythm(1)

    }}
  >
    <Img fluid={props.data.avatata.childImageSharp.fluid} />
  </div>
  <p>
    Делаю скучное интересным, бренды — известными, а маркетинг — эффективным.
    Помогаю брендам расти и создавать продукты.
    Мое резюме можно посмотреть на <a href="https://linedin.com/martyuk">LinkedIn</a>, а портфолио — на <a href="http://martyuk.com">красивом лендинге</a> с анимацией и версткой (<i>не то, что здесь</i>).
  </p>
  <h3>Опыт</h3>
  <ul>
    <li>BBDO
      <ul>
        <li>Помогаю любимым клиентам достигать бизнес-показателей
          при помощи коммуникационных инструментов.
          Отвечаю за креативный продукт с этапа идеи
          до финальной реализации.</li>
        <li>Клиенты: Беру, Яндекс.Маркет, Pedigree, Додо Пицца и Яндекс.Музыка </li>
        <li><i>Беру</i>. Разработали коммуникационную платформу,
        чтобы бренд всегда и везде был одинаково классным и узнаваемым
          (<a href="https://www.bloomberg.com/news/articles/2018-10-24/the-google-of-russia-takes-new-stab-at-being-its-amazon-too">Bloomber</a>, <a href="https://www.rbc.ru/finances/27/04/2018/5ae332279a79477da3f810a1">РБК</a>)
        </li>
        <li><i>Яндекс.Музыка</i>. Вместе с WWF, Universal Music и Мастерской Ивана Дорна
        запустили Birds Records — музыкальный лейбл, который монетизирует голоса птиц через стриминг
          (<a href="https://meduza.io/feature/2019/10/10/my-govorim-vam-cherez-ivana-nas-ochen-malo-nam-ochen-slozhno"> Meduza</a>, <a href="https://www.the-village.ru/village/city/news-city/364281-dich">TheVillage</a>, <a href="https://www.wonderzine.com/wonderzine/life/life/246411-birds-records">Wonderzine</a>, <a href="https://www.kp.ru/daily/27053.5/4120442/">Комсомольская Правда</a>)
        </li>
        <li><i>Додо Пицца</i>. Со специалистами по нейросетям из МФТИ и Сколтеха 
        создали Опенсорс пиццу и выложили исходный код на GitHub
          (<a href="https://tjournal.ru/tech/120179-dodo-picca-sozdala-piccu-s-pomoshchyu-neyrosetey-i-opublikovala-ishodnyy-kod-v-otkrytom-dostupe">TJournal</a>, <a href="https://rb.ru/story/dodo-pizza-ai/">Rusbase</a>, <a href="https://vk.com/wall-91933860_264687">N+1</a>)
        </li>
      </ul>
    </li>
    <li>Leo Burnett
      <ul>
        <li>В течение двух лет разрабатывал бо́льшую часть коммуникации Макдоналдс: запускал новые бургеры и новые товарные категории. Делал диджитал, снимал ролики и снимался в роликах сам.
        </li>
        <li>Клиенты: Макдоналдс и ABI Product</li>
        <li><i>Макдоналдс</i>. Придумывал креатив для Монополии в Макдоналдс, да, это когда на стаканчиках и бургерах появляются стикеры с улицами</li>
        <li><i>Макдоналдс</i>. Разрабатывал долгосрочную HR-платформу, чтобы 
        амбициозные и классные ребята стабильно приходили работать в Макдоналдс</li>
      </ul>
    </li>
  </ul>
  <h3>Образование</h3>
  <ul>
    <li>Product.degree
      <ul>
        <li><i>Школа продакт-менеджеров от Sports.ru и Aviasales</i>.
        Здесь я разобрался, чем занимаются продакт-менеджеры. Теперь я знаю, что продукт и маркетинг — это две стороны одного и того же.</li>
      </ul>
    </li>
    <li>Wordshop
      <ul>
        <li><i>Академия коммуникации</i>. Пол года я учился придумывать идеи. И еще пол года — оценивать. Потому что придумать идею может каждый. А отличить хорошую идею от плохой надо уметь.</li>
      </ul>
    </li>
    <li>Московский инженерно-физический институт
      <ul>
        <li><i>Специалист в области экономической безопасности</i>.
        Тут я учился считать NPV и управлять проектами при по стандарту ISO 9000.
        Читал PMBOK и считал финмодели.
         </li>
      </ul>
    </li>
    <li>Московский инженерно-физический институт
      <ul>
        <li><i>Специалист в области твердого состояния вещества</i>.
        Мой диплом назывался “Спектроскопия фотолюминесценции квантовых колец GaAs/GaAlAs, выращенных при помощи капельной эпитаксии”. Я должен был заниматься созданием электроники нового типа, но вместо аспирантуры пошел на стажировку в креативное агентство.</li>
      </ul>
    </li>
  </ul>
  <h3>Выступления</h3>
  <ul>
    <li>Благотворительность в цифровую эпоху
      <ul>
        <li><i>Master Brand: Digital Branding</i> — октябрь, 2019</li>
        <li><i>DADA Agency</i> — октябрь, 2019</li>
      </ul>
    </li>
    <li>Креативные решения для бизнес-задач, которые выделяют из клаттера
      <ul>
        <li><i>Митап по B2C маркетингу Яндекс.Маркета</i> — ноябрь, 2019</li>
      </ul>
    </li>
    <li>Superbowl доказывает, что креатив работает
      <ul>
        <li><i>Митап BBDO×Mars</i> — март, 2019</li>
      </ul>
    </li>
    <li>Как продавать креатив IT-компаниям
      <ul>
        <li><i>BBDO College</i> — март, 2019</li>
        <li><i>BBDO School</i> — февраль, 2019</li>
      </ul>
    </li>
  </ul>
  </Layout>
)
  
export const pageQuery = graphql`
  query {
  avatata: file(relativePath: { eq: "breathtaking_photo.jpg" }) {
    childImageSharp {
    fluid(maxHeight: 500) {
      ...GatsbyImageSharpFluid
    }
    }
  }
  }
`;
