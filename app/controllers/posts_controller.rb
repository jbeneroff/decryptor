class PostsController < ApplicationController
  before_action :set_post, only: %i[show update destroy add_to_cryptocurrency]
  before_action :authorize_request, only: %i[create update destroy]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts, include: %i[cryptocurrency user], status: :ok
  end

  # GET /posts/1
  def show
    render json: @post, include: %i[cryptocurrency user], status: :ok
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current_user
    @cryptocurrency = Cryptocurrency.find(params[:cryptocurrency_id])
    @post.cryptocurrency = @cryptocurrency
    @cryptocurrency.posts << @post
    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  # Get /cryptocurrencies/1/posts/2
  # def add_to_cryptocurrency
  #   @cryptocurrency = Cryptocurrency.find(params[:cryptocurrency_id])
  #   @cryptocurrency.posts << @post

  #   render json: @cryptocurrency, include: :posts
  # end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @post = Post.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def post_params
    params.require(:post).permit(:content, :cryptocurrency)
  end
end
