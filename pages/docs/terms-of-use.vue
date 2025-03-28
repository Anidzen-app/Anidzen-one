<script setup lang="ts">
definePageMeta({
  layout: 'docs'
})

const pageHeader = ref({
  title: 'Пользовательское соглашение',
  description: 'Интернет - ресурс anidzen.com (в дальнейшем - Ресурс) является интернет-сайтом, позволяющим пользователям обмениваться друг с другом информацией об аниме в свободной форме',
  lastModified: '3.14.2025'
})

const userAgreement = ref({
  titleId: 1,
  title: 'О пользовательском соглашении',
  sections: [
    {
      id: 7.1,
      description: 'Используя/посещая платформу Anidzen (включая все материалы, размещенные на ресурсе), вы подтверждаете согласие с настоящими УСЛОВИЯМИ ПОЛЬЗОВАНИЯ, которые можно найти по следующему адресу: https://anidzen.club/terms. В случае, если вы не согласны с любым из положений данного соглашения, пожалуйста, покиньте платформу. УСЛОВИЯ ПОЛЬЗОВАНИЯ могут быть изменены администрацией без предварительного уведомления пользователей. Обновленная версия соглашения вступает в силу через 3 (три) дня с момента публикации, если в новой редакции не указано иное.',
      options: []
    }
  ]
})

const responsibilityLimitation = ref({
  titleId: 2,
  title: 'Условия ограничения ответственности',
  sections: [
    {
      id: 2.1,
      description: 'Пользователь соглашается с тем, что использование платформы Anidzen происходит на его собственный риск.',
      options: [
        {
          id: '2.1.1',
          content: 'Пользователь понимает и соглашается с тем, что Anidzen предоставляет доступ к материалам и данным, созданным третьими сторонами, и размещенным ими на своих серверах и устройствах в сети Интернет. Администрация платформы не может контролировать содержание и безопасность этих материалов, поэтому она не несет ответственности за:'
        },
        {
          id: '2.1.2',
          content: 'Содержание материалов, полученных пользователем через платформу, их несоответствие действующему законодательству или оскорбительный характер.'
        },
        {
          id: '2.1.3',
          content: 'Последствия использования или неиспользования полученной информации.'
        },
        {
          id: '2.1.4',
          content: 'Могут возникнуть различия между результатами использования платформы и ожиданиями пользователя.'
        },
        {
          id: '2.1.5',
          content: 'Повреждения оборудования или программного обеспечения пользователя, возникшие в процессе использования платформы.'
        },
        {
          id: '2.1.6',
          content: 'Необходимость или невозможность использования платформы по каким-либо причинам.'
        },
        {
          id: '2.1.7',
          content: 'Последствия распространения нелегального или нелицензионного программного обеспечения и контента, который нарушает права третьих лиц.'
        },
        {
          id: '2.1.8',
          content: 'Платформа Anidzen не несет ответственности за ущерб, убытки или расходы, возникшие из-за использования ресурса, его невозможности использования или упущенной прибыли.'
        },
        {
          id: '2.1.9',
          content: 'Пользователь обязуется не передавать свои персональные данные, полученные при регистрации (логин и пароль), третьим лицам, и несет ответственность за потерю данных или их неправомерное использование.'
        },
        {
          id: '2.1.10',
          content: 'Администрация платформы не несет ответственности за действия третьих лиц, использующих персональные данные пользователя.'
        },
        {
          id: '2.1.11',
          content: 'Платформа не несет обязательств по обеспечению конфиденциальности предоставленных пользователем данных, если не предусмотрено иным в соглашениях или законодательстве.'
        },
        {
          id: '2.1.12',
          content: 'Anidzen не контролирует легальность или нелегальность передаваемой информации, а также права собственности на данные.'
        }
      ]
    }
  ]
})

const usageRestrictions = ref({
  titleId: 3,
  title: 'Ограничения на использование ресурса пользователем',
  sections: [
    {
      id: 3.1,
      description: 'При использовании данного ресурса, пользователь соглашается с тем, что не имеет права на следующие действия:',
      options: [
        {
          id: '3.1.1',
          content: 'Размещать файлы или программы, предназначенные для нарушения, уничтожения или ограничения функциональности любого компьютерного или телекоммуникационного оборудования, а также программ, для осуществления несанкционированного доступа. Это также включает серийные номера к коммерческим программным продуктам и программы для их генерации, логины, пароли и другие средства для получения несанкционированного доступа к платным ресурсам в Интернете.'
        },
        {
          id: '3.1.2',
          content: 'Размещать файлы, которые затрагивают права собственности третьих лиц, такие как патенты, торговые марки, коммерческую тайну, авторские права или другие права собственности и/или смежные с ними права.'
        },
        {
          id: '3.1.3',
          content: 'Отправлять несанкционированные почтовые сообщения рекламного типа (junk mail, spam) на адреса электронной почты, указанные на сайте.'
        },
        {
          id: '3.1.4',
          content: 'Копировать и использовать в коммерческих целях любую информацию, получаемую с ресурса, которая нарушает права других пользователей или может нанести им прямой материальный или моральный ущерб.'
        },
        {
          id: '3.1.5',
          content: 'Размещать ссылки на ресурсы в Интернете, содержание которых противоречит действующему законодательству РФ.'
        },
        {
          id: '3.1.6',
          content: 'Выдавать себя за другого человека или представителя организации и/или сообщества без достаточных на то прав, в том числе за сотрудников администрации или владельца ресурса.'
        }
      ]
    }
  ]
})

const serviceGuarantees = ref({
  titleId: 4,
  title: 'Гарантии работоспособности',
  sections: [
    {
      id: 4.1,
      description: 'Доступ к ресурсу предоставляется по принципу «как есть» («as is») без каких-либо гарантий, как прямых, так и косвенных.',
      options: [
        {
          id: '4.1.1',
          content: 'Администрация ресурса не гарантирует работоспособность как сайта в целом, так и отдельных его разделов. Также не дается гарантия на работоспособность и достоверность ссылок, размещенных пользователями ресурса.'
        },
        {
          id: '4.1.2',
          content: 'Ресурс не несет ответственности за любые прямые или непрямые убытки, произошедшие из-за использования либо невозможности использования службы, а также из-за несанкционированного доступа к вашим коммуникациям.'
        }
      ]
    }
  ]
})

const adminRights = ref({
  titleId: 5,
  title: 'Права администрации ресурса',
  sections: [
    {
      id: 5.1,
      description: 'Администрация ресурса имеет следующие права:',
      options: [
        {
          id: '5.1.1',
          content: 'Администрация Ресурса вправе отклонить доступ к Ресурсу любому Пользователю или группе Пользователей без объяснения причин своих действий и предварительного уведомления.'
        },
        {
          id: '5.1.2',
          content: 'Администрация Ресурса вправе изменять либо удалять ссылки на информацию, графические, звуковые и прочие данные, размещенные Пользователями на Ресурсе, без предварительного уведомления и объяснения причин своих действий.'
        }
      ]
    }
  ]
})

const responsibilityOfParties = ref({
  titleId: 6,
  title: 'Ответственность сторон',
  sections: [
    {
      id: 6.1,
      description: 'Пользователь соглашается с тем, что все возможные споры по поводу СОГЛАШЕНИЯ ОБ ИСПОЛЬЗОВАНИИ будут разрешаться по нормам российского права.',
      options: []
    },
    {
      id: 6.2,
      description: 'Пользователь соглашается с тем, что нормы и законы о защите прав потребителей не могут быть применимы к использованию им Ресурса, поскольку он не оказывает возмездных услуг.',
      options: []
    },
    {
      id: 6.3,
      description: 'Ресурс не устанавливает с пользователями агентских отношений, отношений товарищества, отношений по совместной деятельности, отношений личного найма, а также каких-то иных отношений, прямо не описанных в СОГЛАШЕНИИ ОБ ИСПОЛЬЗОВАНИИ.',
      options: []
    },
    {
      id: 6.4,
      description: 'Бездействие со стороны Ресурса в случае нарушения Пользователем, либо группой Пользователей ПОЛЬЗОВАТЕЛЬСКОГО СОГЛАШЕНИЯ не означает того, что Ресурс содействует Пользователю, либо группе Пользователей в таковых действиях.',
      options: []
    },
    {
      id: 6.5,
      description: 'Бездействие со стороны Ресурса в случае нарушения Пользователем либо группой Пользователей ПОЛЬЗОВАТЕЛЬСКОГО СОГЛАШЕНИЯ не лишает Ресурс права предпринять соответствующие действия в защиту своих интересов позднее.',
      options: []
    }
  ]
})

const agreementConsent = ref({
  titleId: 7,
  title: 'Согласие с пользовательским соглашением',
  sections: [
    {
      id: 7.1,
      description: 'Если вы не согласны сo всеми вышеуказанными условиями, вы не имеете права посещать ресурс как в целом, так и любую его часть, кроме страницы с пользовательским соглашением, получать и/или использовать содержимое настоящего ресурса любыми другими способами как в целом так и в любой его части!',
      options: []
    },
    {
      id: 7.2,
      description: 'Если вы не согласны с пользовательским соглашением, вы должны немедленно покинуть ресурс.',
      options: []
    }
  ]
})
</script>

<template>
  <div>
    <section
      id="docs-terms-of-use"
      class="docs-terms-of-use"
    >
      <UiDocsPageHeader
        :title="pageHeader.title"
        :description="pageHeader.description"
        :last-modified="pageHeader.lastModified"
      />
      <div class="mt-10">
        <UiDocsDocumentSection :data="userAgreement" />
        <UiDocsDocumentSection :data="responsibilityLimitation" />
        <UiDocsDocumentSection :data="usageRestrictions" />
        <UiDocsDocumentSection :data="serviceGuarantees" />
        <UiDocsDocumentSection :data="adminRights" />
        <UiDocsDocumentSection :data="responsibilityOfParties" />
        <UiDocsDocumentSection :data="agreementConsent" />
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>
