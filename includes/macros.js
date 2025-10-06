function segmento_cliente(gasto_anual) {
  return `
    CASE
      WHEN ${gasto_anual} > 15000 THEN 'VIP'
      WHEN ${gasto_anual} > 8000 AND ${gasto_anual} <= 15000 THEN 'High-Value'
      WHEN ${gasto_anual} > 2000 THEN 'Standard'
      ELSE 'Low-Value'
    END`;
}

module.exports = {
  segmento_cliente
};