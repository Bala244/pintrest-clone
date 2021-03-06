Rails.application.routes.draw do
  devise_for :users
  
   resources :pins do
    member do
      put "like", to: "pins#upvote"
      put "dislike", to: "pins#downvote"
    end
  end

  root "pins#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
