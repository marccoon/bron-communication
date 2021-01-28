<template>
  <div class="container">
    <Slider
        :slides="projectSlides"
    />

  </div>

</template>

<script>
export default {
  data: () => ({
    projectSlides: [
      {
        img: 'img/project-img.png',
        title: 'Project name',
        text: 'we’d love converse with aspiring brands and individuals lets collaborate! <br>\n' +
              ' we’d love converse with aspiring brands and individuals lets collaborate!',
        btn: 'view project',
        link:'/',
        subtitle: true,
      },
      {
        img: 'img/project-img.png',
        title: 'Project name',
        text: 'we’d love converse with aspiring brands and individuals lets collaborate! <br>\n' +
            ' we’d love converse with aspiring brands and individuals lets collaborate!',
        btn: 'view project',
        link:'/',
        subtitle: true,
      },
      {
        img: 'img/project-img.png',
        title: 'Project name',
        text: 'we’d love converse with aspiring brands and individuals lets collaborate! <br>\n' +
            ' we’d love converse with aspiring brands and individuals lets collaborate!',
        btn: 'view project',
        link:'/',
        subtitle: true,
      },
    ],
  })
}
</script>

<style>

</style>
