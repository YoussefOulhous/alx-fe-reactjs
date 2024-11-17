import { create } from "zustand";


const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { ...recipe, id: Date.now().toString() }],
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) =>
    set((state) => {
      const searchTerm = term.toLowerCase();
      const filteredRecipes = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm)
      );
      return { searchTerm: term, filteredRecipes };
    }),
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.filteredRecipes, newRecipe],
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      filteredRecipes: state.filteredRecipes.filter((recipe) => recipe.id !== id),
    })),
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
      filteredRecipes: state.filteredRecipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),
  favorites: [],

   
  addFavorite: (recipeId) =>
      set((state) => ({
        favorites: [...new Set([...state.favorites, recipeId])], // Ensure no duplicates
      })),
  
   
  removeFavorite: (recipeId) =>
      set((state) => ({
        favorites: state.favorites.filter((id) => id !== recipeId),
      })),
  
  recommendations: [],
  
   
  generateRecommendations: () =>
      set((state) => {
        const recommended = state.recipes.filter(
          (recipe) =>
            state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return { recommendations: recommended };
      }),
}));

export { useRecipeStore };
