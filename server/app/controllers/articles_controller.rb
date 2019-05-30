class ArticlesController < ApplicationController
    # require_relative './concerns/webhoseio.rb'
        def news
        news_url = 'https://newsapi.org/v2/top-headlines?'\
       'country=us&'\
       'apiKey=4992c2232bea48d2903dffead32a2fe5'
       req = open(news_url)
       response_body = req.read
       render json: response_body
       end


       
       def good_news
        # byebug
        user = User.find_by(id: params[:id])
        webhoseio = Webhoseio.new('8ee5a647-e7bc-4bbd-be29-6805d0b99b6b')
        
        query_params = {
          "q" => user.ready_to_go_categories,
          "sort" => "relevancy",
          "ts" => user.last_login,
          "language" => "english"
        }
        user.last_login = DateTime.now.strftime('%Q').to_i
        user.save
        output = webhoseio.query('filterWebContent', query_params)
          # output['posts'][0]['text']
          # # byebug
          # puts output['posts'][0]['published']
          render json: output['posts'].slice(0,15)
    end 
    
    
  def destroy
    article = Article.find_by(article_params)
    if article
      article.destroy
      render json: {message: "article destroyed"}
    else
      render json: {error: "Could not destroy"}, status: 404
    end
  end
    

end


#    def watson
#     url='
#     https://gateway-lon.watsonplatform.net/discovery/api/v1/environments/system/collections/news-en/query?version=2018-12-03&deduplicate=false&highlight=true&passages=true&passages.count=5&natural_language_query=Brexit'
#     # render json:
#    end
