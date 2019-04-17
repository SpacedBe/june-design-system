export default class Color {
  getColor(color: string | undefined) {
    return `var(--color-${color || 'primary'})`;
  }

  getColorContrast(color: string | undefined) {
    return `var(--color-${color || 'primary'}-contrast)`
  }

  getColorShade(color: string | undefined) {
    return `var(--color-${color || 'primary'}-shade)`;
  }

  getColorTint(color: string | undefined) {
    return `var(--color-${color || 'primary'}-tint)`;
  }
}
