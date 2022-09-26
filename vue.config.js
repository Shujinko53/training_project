// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
// })

module.exports = {
	css: {
		loaderOptions: {
			sass: {
				additionalData: `@import "@/assets/scss/styles.scss";`,
			},
            css: {
              // Примечание: формат конфигурации отличается между Vue CLI v4 и v3
              // Для пользователей Vue CLI v3, обратитесь к документации css-loader v1
              // https://github.com/webpack-contrib/css-loader/tree/v1.0.1
              modules: {
                localIdentName: '[local]-[hash:base64:8]'
              },
            }
		},
	}
};
