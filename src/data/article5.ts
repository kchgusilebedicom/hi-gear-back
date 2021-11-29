import { makePath } from 'src/utils';
import { Page } from '../artticles/article.model';

const articleId = 5;

const makePathLocal = makePath(articleId);

export const article5: Page = {
  id: articleId,
  headline: 'Чистота из баллончика',
  blocks: [
    {
      title:
        'Что в автомобиле можно и нужно чистить с помощью специальной аэрозольной химии?',
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
          content: `Нередко причиной той или иной неисправности в автомобиле является банальная грязь. И чтобы вернуть агрегату работоспособность, иногда нужна лишь чистка или промывка отдельных узлов. Пожалуй, это самый приятный ремонт, не требующий запчастей и с минимумом затрат!
          Далеко не всё в машине можно почистить с помощью старой зубной щетки и баночки с бензином. В отдельных случаях дедовские методы неэффективны, а в некоторых даже опасны.  Для таких ситуаций разработан целый ряд удобных аэрозольных очистителей, применение которых делает ремонт цивилизованным и приятным!`,
        },
      ],
    },
    {
      title: 'Очиститель тормозов',
      elements: [
        {
          type: 'text',
          content: `Тормозные механизмы должны быть сухими и чистыми, однако бывают они таковыми не всегда. Вследствие утечки тормозной жидкости или масла из полуосей моста теряют коэффициент трения колодки, покрываются абразивной грязью механизмы самоподвода, разбухают внешние пыльники… Перед устранением проблемы (и, на всякий случай — после!) механизм нужно полностью очистить и обезжирить, с чем отлично справляется специализированный аэрозоль Hi-Gear HG5385R.
          Состав из промывочного баллона большой емкости (410 граммов) эффективно моет и быстро испаряется, вполне официально имея при этом несколько дополнительных возможностей. Производитель также рекомендует смело применять Hi-Gear HG5385R для очистки электрических соединений (в первую очередь разъемов), на которые капало или сочилось масло из двигателя или трансмиссии, а также для промывки любых замасленных деталей и узлов, которым требуется разборка и ремонт.`,
        },
      ],
    },
    {
      elements: [
        {
          type: 'img',
          content: makePathLocal(),
        },
        {
          type: 'text',
          title: 'Очиститель карбюратора',
          content: `Карбюраторные автомобили сегодня постепенно становятся редкостью, хотя в сельской местности их все еще полно. Но в мотоциклах, скутерах и в самой разной садовой и строительной технике старый-добрый карбюратор из-за своей дешевизны упорно не сдает позиции. 
          Различные засорения, которым подвержена классическая, не оснащенная инжектором система питания двигателей, эффективно смываются специальными аэрозолями, состав которых агрессивен к нагару и лаковым отложениям, но безвреден для большого количества резиновых уплотнителей, характерных для карбюратора.
          Пример такого средства — аэрозольный очиститель  Hi-Gear HG3121. Применяется он практически так же, как и очиститель дросселя инжекторных моторов: интенсивно распыляется в диффузоры камер карбюратора со снятым воздушным фильтром, при работающем двигателе с постоянной подгазовкой. Помимо самого карбюратора Hi-Gear HG3121 очистит шток регулятора холостого хода и прочие «сокровенные» места в системе питания любого мотора — от автомобиля до бензопилы!`,
        },
      ],
    },
    {
      title: 'Очиститель датчика массового расхода воздуха',
      elements: [
        {
          type: 'text',
          content: `Датчик массового расхода воздуха — второй по важности в автомобиле после пресловутого датчика положения коленвала. Именно он отвечает за корректное формирование состава топливо-воздушной смеси, расход топлива и стабильный запуск мотора. 
          В процессе работы датчик постепенно загрязняется выхлопами и пылью, содержащейся в воздухе (несмотря на то, что стоит после фильтра!), а также масляно-топливными парами, попадающими на него со стороны дросселя. Однако во избежание повреждения или недостоверности показаний промывать его бензином или случайными растворителями, найденными на пыльных полках гаража, нельзя.
          Применение разного рода щеточек и кисточек также противопоказано, ибо особенность датчика массового расхода воздуха типа MAF состоит в ювелирной хрупкости и нежности его конструкции. Количество воздуха в нем оценивается через изменение температуры стоящего в потоке терморезистора (если очень упрощенно), а для максимально быстрой реакции датчик должен обладать чрезвычайно малой инерционностью — то есть крошечными размерами и массой.
          Единственно правильный метод — использование особых аэрозольных очистителей, предназначенных специально для автомобильных расходомеров. Таких, как Hi-Gear HG3260. Распыляя состав на датчик, согласно инструкции, мы безупречно промываем его без риска повредить струей. После процедуры исчезает ошибка, выходит на норму расход топлива, стабилизируется запуск и холостой ход. Но не забывайте — датчик перед промывкой нужно извлечь из впускного тракта!`,
        },
      ],
    },
    {
      elements: [
        {
          type: 'img',
          content: makePathLocal(),
        },
      ],
    },
    {
      title: 'Пенный очиститель двигателя',
      elements: [
        {
          type: 'text',
          content: `Мойка двигателя — полезная процедура. После нее становятся отчетливо видны места утечек разных эксплуатационных жидкостей, улучшается температурный режим за счет избавления от грязе-масляной «шубы», снижается риск электрических проблем — утечек и замыканий. Вот только проводить эту процедуру нужно весьма аккуратно, чтобы не навредить! На 99% автомоек мотор вам помоют с помощью того же средства, которым моют и кузов, что неправильно: все шампуни для бесконтактной мойки имеют сильную щелочную основу, которую даже при желании трудно удалить из подкапотного пространства полностью. И точно не стоит ждать, что это качественно сделают замученные долгими сменами автомойщики.
          Для очистки мотора есть специализированное средство — оно эффективно и при этом безопасно. Пенный очиститель Hi-Gear HG5377 фасуется в удобный аэрозольный флакон (454 грамма) и формирует при распылении устойчивую пену, которая удерживается и не стекает даже с вертикальных поверхностей. Hi-Gear HG5377 распыляют на теплый (50 градусов) мотор и прочие агрегаты, исключая электронные блоки, дают пене подействовать в течение 10–15 минут, после чего смывают струей воды — в идеале из мойки высокого давления (например, на мойке самообслуживания) либо из шланга. HG5377 легко смывает свежее масло, пригоревшую смазку, следы утечки антифризов, соляные потеки и многое другое.`,
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
