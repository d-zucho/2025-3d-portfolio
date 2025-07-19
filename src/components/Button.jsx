const Button = ({ text, className, id }) => {
  return (
    <a
      className={`${className ?? ''} cta-wrapper`}
      id={id}
      href='#'
      onClick={(e) => {
        e.preventDefault()
        const target = document.getElementById('counter')
        if (target && id) {
          const offset = window.innerHeight * 0.15
          const top =
            target.getBoundingClientRect().top + window.scrollY - offset
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }}
    >
      <div className='cta-button group'>
        <div className='bg-circle' />
        <p className='text'>{text}</p>
        <div className='arrow-wrapper'>
          <img src='/images/arrow-down.svg' alt='arrow' aria-hidden='true' />
        </div>
      </div>
    </a>
  )
}

export default Button
