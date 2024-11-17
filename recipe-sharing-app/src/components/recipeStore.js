import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [], // Initial recipe list
  favorites: [], // Manage favorites
  recommendations: [], // For recommended recipes
  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
  })),
  updateRecipe: (id, updatedData) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, ...updatedData } : recipe
    ),
  })),
  setRecipes: (newRecipes) => set(() => ({ recipes: newRecipes })), // <-- Add this
  addFavorite: (id) => set((state) => ({ favorites: [...state.favorites, id] })),
  removeFavorite: (id) => set((state) => ({
    favorites: state.favorites.filter((favoriteId) => favoriteId !== id),
  })),
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
