type BannerProps = {
  visible?: boolean
}

const hiddenStyles = {
  top: '-100%',
  marginBottom: 'calc(0rem - 1rem - 1.5 * 1em)',
  // margin bottom accounts for height. py-2 = 1rem, remaining height is line height (1.5) * font-size
}

const Banner = ({ visible }: BannerProps) =>
  visible ? (
    <div
      className='relative py-2 transition-all bg-gradient-to-r from-blue-600 to-blue-400'
      style={visible ? undefined : hiddenStyles}>
      Banner
    </div>
  ) : null

export default Banner
