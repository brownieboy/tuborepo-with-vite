// import react from '@vitejs/plugin-react'

module.exports = {
  // plugins: [react()],
  build: {
    lib: {
      entry: "/index.ts",
      name: "ui",
      fileName: (format) => `ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
};
