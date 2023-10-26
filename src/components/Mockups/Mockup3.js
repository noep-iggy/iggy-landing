export function Mockup3() {
  return (
    <div class='bg-white py-6 sm:py-8 lg:py-12'>
      <div class='max-w-screen-xl px-4 md:px-8 mx-auto'>
        <div class='grid md:grid-cols-2 gap-8 lg:gap-12'>
          <div>
            <div class='h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg'>
              <img
                src='https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750'
                loading='lazy'
                alt='Photo by Martin Sanchez'
                class='w-full h-full object-cover object-center'
              />
            </div>
          </div>

          <div class='md:pt-8'>
            <p class='text-iggy-green font-bold text-center md:text-left'>
              Mockup3
            </p>

            <h1 class='text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6'>
              Our competitive advantage
            </h1>

            <p class='text-gray-500 sm:text-lg mb-6 md:mb-8 text-left'>
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated. It may be used to
              display a sample of fonts or generate text for testing. Filler
              text is dummy text which has no meaning however looks very similar
              to real text.
              <br />
              <br />
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is{' '}
              <a
                href='#'
                class='text-iggy-green hover:bg-iggy-green active:bg-iggy-green underline transition duration-100'
              >
                random
              </a>{' '}
              or otherwise generated. It may be used to display a sample of
              fonts or generate text for testing. Filler text is dummy text
              which has no meaning however looks very similar to real text.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
