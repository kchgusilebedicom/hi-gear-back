import { makePath } from 'src/utils';
import { Page } from '../artticles/article.model';

const articleId = 2;

const makePathLocal = makePath(articleId);

const article2: Page = {
  id: articleId,
  headline: 'Как победить трение',
  blocks: [
    {
      title:
        'Кондиционер металла SMT2 — как он работает и для чего применяется?',
      elements: [
        {
          type: 'img',
          content: makePathLocal(),
        },
      ],
    },
    {
      elements: [
        {
          type: 'text',
          content: `Масла и смазки несовершенны. Особенно недорогие. К тому же они интенсивно теряют свои качества со временем. Улучшить свойства любой смазки и облегчить условия скольжения трущихся деталей можно, добавив в состав масла присадку, создающую прочный скользящий слой в паре трения и заполняющую микронеровности на стальных поверхностях.
          Поговорка «не подмажешь — не поедешь» стара, как мир. Однако с научной точки зрения принцип работы смазки в трущейся паре металлических деталей впервые объяснил британский инженер и разработчик паровых машин Бошэм Тауэр лишь в конце XVIII века. Собственно, именно он установил принцип работы так называемого «масляного клина», обнаружив, что в тонкой пленке между движущимися поверхностями устанавливается давление, удерживающее нагрузку.
          Это открытие вывело развитие механики на новый уровень, а его значение для автомобильной промышленности трудно переоценить. Оно позволило создавать долговечные механизмы, работающие в весьма тяжелых условиях.
          Впрочем, смазка не всегда справляется со своими задачами. Расплавление и прихват подшипников скольжения, «оквадрачивание» шариков в подшипниках качения, выкрашивание зубьев шестерней и прочие прелести — пример того, что возможности  масел и смазок ограничены и не позволяют защитить детали при длительных высоких нагрузках.
          Помимо экстремальных условий работы механизмов, существует целый ряд дополнительных факторов, снижающих смазывающие свойства масел:  попадание в смазку топлива, загустение на морозе и разжижение при высоких температурах, выработка присадок при длительной эксплуатации масла  и просто его низкое качество. Поэтому в любом случае механизмам требуется дополнительная и к тому же надежная  защита, способная предотвращать износ деталей. И такая защита существует – состав под названием SMT2, известный также как «кондиционер металла».
          SMT2 сам по себе не является смазкой. Он использует масло или смазку (жидкую, консистентную, а также топливо) для доставки в зоны трения, где от температуры и давления запускается реакция взаимодействия препарата с ионами железа и образуется тончайший, но сверхпрочный слой, заполняющий микрошероховатости поверхностей.`,
        },
      ],
    },
    {
      bgColor: '#DFF2FF',
      elements: [
        {
          type: 'text',
          content: `Этот слой работает при разрыве масляной пленки или снижении эффективности масляного клина и надежно защищает детали пар трения от непосредственного соприкосновения. Слой SMT2 — самовосстанавливающийся, поскольку средство продолжает работать на протяжении всего срока использования масла или смазки.
          Кондиционер металла защищает механизмы в различных проблемных ситуациях с маслом (потеря вязкости, утечка, выработка присадок и т.п.), а также предотвращает негативные последствия от применения  некачественного масла или острого дефицита смазки в двигателе. SMT2 снижает шум, гул и стабилизирует температуру узлов и агрегатов. Конечно, оживить убитый мотор или коробку передач, требующих капитального ремонта,  кондиционер металла не сможет. Но своевременно примененный, он остановит процесс изнашивания, чем продлит срок службы деталей.`,
        },
        {
          type: 'bold-text',
          content: `К слову, эффект от работы кондиционера металла — не волшебный, а вполне осязаемый и измеряемый в цифрах. На сайте Hi-Gear можно ознакомиться с видео, весьма наглядно демонстрирующим, как SMT2 
          тестируется на трибомашине (устройстве для испытания масел под нагрузкой), и износ деталей после обработки SMT2 несопоставим с износом на высококлассном масле без SMT2. Разница в пользу SMT2, разумеется!`,
        },
      ],
    },
    {
      title: 'Ситуация: течь из двигателя',
      elements: [
        {
          type: 'img',
          content: makePathLocal(),
        },
      ],
    },
    {
      elements: [
        {
          type: 'text',
          content: `Способов же применения SMT2 — масса, и в ассортименте Hi-Gear имеется не один десяток препаратов содержащих эту полезную добавку. Впрочем, все их можно разделить на две большие группы — прямое целенаправленное применение и сопутствующее. Рассмотрим их оба.
          Самый прямой и очевидный способ — присадка в смазку. SMT2 можно добавить в моторное масло (60 мл на 1 л моторного масла), в трансмиссионное (механическая КП, раздаточная коробка, главная передача, бортовые редукторы: 50 мл на 1 л масла; АКП и вариаторы: 15 мл на 1 л жидкости), в подшипниковые узлы (30 мл на 1 кг пластичной смазки) и даже в дизтопливо (20 мл на 100 л топлива). 
          Фасовки предлагаются любые — от промышленных, рассчитанных на обслуживание больших автопарков, до небольших, предназначенных для одной обработки двигателя легкового автомобиля или малой мототехники: 19-литровое ведро, канистры с дозаторами на 4,3 литра, 2 литра, 1 литр, 0,5 литра, мини-флаконы на 250 и 125 мл. Выбрать оптимальный объем без переплаты очень легко.
          Второй способ применения SMT2 — скажем так, сопутствующий. Множество средств автомобильной химии бренда Hi-Gear содержат в себе кондиционер металла SMT2, как полезный вспомогательный компонент, снижающий трение и нагрев в узлах и агрегатах при решении основных задач. Это комплексные присадки к моторному маслу, экспресс-промывки  двигателей и АКП,  очистители топливного тракта и форсунок, октан- и цетан-корректоры, дизельные антигели, средства для устранения утечек в АКП и ГУР, специальная промывка для перехода с минерального и полусинтетического моторного масла на синтетику и многое другое.`,
        },
      ],
    },
    {
      title: `Со всеми этими составами можно ознакомиться в специальном разделе на сайте бренда Hi-Gear.`,
      elements: [
        {
          type: 'text',
          content: ``,
        },
      ],
    },
    {
      elements: [
        {
          type: 'video',
          content: '',
        },
      ],
    },
  ],
};
